export interface SearchBarProps {
  manufacturer: string;
  model: string;
  setManufacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
};