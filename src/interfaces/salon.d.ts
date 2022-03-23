export type SalonType = {
  id: number;
  slug: string;
  name: string;
  rate?: number;
  image?: string;
  address: string;
  phone: string;
  website?: string;
  description?: string;
  openHours?: string[];
  serviceIds?: number[];
};

export type ServiceType = {
  id: number;
  type: "hair" | "nails" | "massage";
  price: number;
  durationInMinutes: number;
  closestAvailability: Date;
};
