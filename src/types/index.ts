export interface Patient {
  id: string;
  name: string;
  lastVisit: string;
  nextAppointment: string;
  email: string;
  phone: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  date: string;
  time: string;
  treatment: string;
  status: 'confirmed' | 'pending' | 'completed';
}

export interface Product {
  id: string;
  name: string;
  stock: number;
  price: number;
  image: string;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
}

export interface MenuItem {
  name: string;
  path: string;
  icon: React.ComponentType;
}