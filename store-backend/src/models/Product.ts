import { Entity, Column } from "typeorm";
import { BaseEntity } from "@medusajs/medusa";

@Entity()
export class Product extends BaseEntity {
  @Column()
  title: string;

  @Column()
  slug: string;

  @Column({ nullable: true })
  series: string;

  @Column("simple-array", { nullable: true })
  collections: string[];

  @Column("jsonb", { nullable: true })
  reviews: { reviewerName: string; rating: number; reviewText: string }[];

  @Column("jsonb", { nullable: true })
  testimonials: { name: string; role: string; text: string }[];

  @Column({ type: "integer", default: 0 })
  reviewCount: number;

  @Column({ type: "float", default: 0.0 })
  averageRating: number;

  // Add other fields similarly...
}
