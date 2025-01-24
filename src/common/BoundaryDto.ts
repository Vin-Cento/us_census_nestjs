import type { FeatureCollection } from "geojson";

export class BoundaryDto {
  shape: FeatureCollection;
  year: string;
}
