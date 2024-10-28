import { json, LoaderFunction, ActionFunction } from "@remix-run/node";
import { useLoaderData, Form, useActionData } from "@remix-run/react";

interface KlaviyoList {
  type: string;
  id: string;
  attributes: {
    name: string;
    created: string;
    updated: string;
    opt_in_process: string;
  };
}

// Loader to check environment variables
export const loader: LoaderFunction = async () => {
  const envCheck = {
    hasKlaviyoApiKey: !!process.env.KLAVIYO_API_KEY,
    apiKeyLength: process.env.KLAVIYO_API_KEY?.length || 0,
    hasKlaviyoListId: !!process.env.KLAVIYO_LIST_ID,
    listIdLength: process.env.KLAVIYO_LIST_ID?.length || 0,
  };

  console.log("Environment Variables Check:", envCheck);
  return json({ envCheck });
};

// Add action to test Klaviyo API
export const action: ActionFunction = async () => {
  const KLAVIYO_API_KEY = process.env.KLAVIYO_API_KEY;

  try {
    // Test API connection using the newer API version
    const response = await fetch(
      'https://a.klaviyo.com/api/lists',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
          'revision': '2023-02-22'
        }
      }
    );

    const data = await response.json();
    console.log("Klaviyo API Test Response:", data);

    if (!response.ok) {
      throw new Error(`API error: ${data.detail || JSON.stringify(data)}`);
    }

    return json({ success: true, data });
  } catch (error) {
    console.error("Klaviyo API Test Error:", error);
    return json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error
    }, { status: 500 });
  }
};

export default function Index() {
  const { envCheck } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const lists = actionData?.data?.data as KlaviyoList[] | undefined;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Environment Variables Check</h1>
      <pre className="bg-gray-100 p-4 mt-4 rounded">
        {JSON.stringify(envCheck, null, 2)}
      </pre>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Test Klaviyo API Connection</h2>
        <Form method="post">
          <button 
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Test Connection
          </button>
        </Form>

        {lists && (
          <div className="mt-4">
            <h3 className="font-bold mb-2">Available Lists:</h3>
            <div className="space-y-4">
              {lists.map(list => (
                <div key={list.id} className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold">{list.attributes.name}</h4>
                  <p className="text-sm text-gray-600">ID: {list.id}</p>
                  <p className="text-sm text-gray-600">
                    Created: {new Date(list.attributes.created).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {actionData?.error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
            {actionData.error}
          </div>
        )}
      </div>
    </div>
  );
}
