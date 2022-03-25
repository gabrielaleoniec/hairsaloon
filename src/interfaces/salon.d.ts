export type SalonType = {
  id: number;
  slug: string;
  name: string;
  rate?: number | null;
  opinionNo?: number;
  image?: string;
  address: string;
  phone: string;
  website?: string;
  description?: string;
  openHours?: string[];
  services?: ServiceType[];
};

export type ServiceType = {
  id: number;
  service: string;
  price: number;
  durationInMinutes: number;
  closestAvailability: string;
};
