const dotenv = require("dotenv");
const sanityWebhook = require('./sanityWebhook');

let ENV_FILE_NAME = "";
switch (process.env.NODE_ENV) {
  case "production":
    ENV_FILE_NAME = ".env.production";
    break;
  case "staging":
    ENV_FILE_NAME = ".env.staging";
    break;
  case "test":
    ENV_FILE_NAME = ".env.test";
    break;
  case "development":
  default:
    ENV_FILE_NAME = ".env";
    break;
}

try {
  dotenv.config({ path: process.cwd() + "/" + ENV_FILE_NAME });
} catch (e) {}

// CORS when consuming Medusa from admin
const ADMIN_CORS =
  process.env.ADMIN_CORS || "http://localhost:7000,http://localhost:7001";

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = process.env.STORE_CORS || "http://localhost:8000";

const DATABASE_URL =
  process.env.DATABASE_URL || "postgres://localhost/medusa-starter-default";

const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

const plugins = [
  {
    resolve: "medusa-plugin-sanity",
    options: {
      projectId: "joet3wd5",
      dataset: "production",
      token: process.env.SANITY_API_TOKEN,
      apiVersion: "2023-01-01", // Specify a valid API version
      useCdn: false, // Set to true if you want to use the CDN for faster access
    },
  },
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
  {
    resolve: `@medusajs/file-local`,
    options: {
      upload_dir: "uploads",
    },
  },
  {
    resolve: "@medusajs/admin",
    options: {
      autoRebuild: true,
      develop: {
        open: process.env.OPEN_BROWSER !== "false",
      },
    },
  },
  {
    resolve: 'medusa-custom-attributes',
    options: {
      enableUI: true,
      attributes: {
        products: [
          {
            attribute: 'price',
            type: 'int',
            required: true,
            description: 'Price'
          },
          {
            attribute: 'edition',
            type: 'string',
            required: true,
            description: 'Format'
          },
          {
            attribute: 'isbn',
            type: 'string',
            required: false,
            description: 'ISBN/Product ID'
          }
        ]
      }
    }
  },
];

const modules = {
  productService: {
    resolve: "@medusajs/product",
  },
};

const projectConfig = {
  jwt_secret: process.env.JWT_SECRET || "supersecret",
  cookie_secret: process.env.COOKIE_SECRET || "supersecret",
  store_cors: STORE_CORS,
  database_url: DATABASE_URL,
  admin_cors: ADMIN_CORS,
};

module.exports = {
  projectConfig,
  plugins,
  modules,
  server: {
    middleware: [
      sanityWebhook,
    ],
  },
};
