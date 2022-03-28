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
  openHours?: OpenHoursWeek;
  services?: ServiceType[];
};

export type ServiceType = {
  id: number;
  service: string;
  price: number;
  durationInMinutes: number;
  closestAvailability: string;
};

export type OpenHoursWeek = {
  Mon: OpenHoursDay;
  Tue: OpenHoursDay;
  Wed: OpenHoursDay;
  Thu: OpenHoursDay;
  Fri: OpenHoursDay;
  Sat: OpenHoursDay;
  Sun: OpenHoursDay;
};

export type OpenHoursDay = {
  start: string;
  end: string;
} | null;

export enum DayOfWeek {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}
