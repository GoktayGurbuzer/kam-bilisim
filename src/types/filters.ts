export interface FilterAttribute {
  id: string;
  name: string;
  code: string;
  dataType: 'text' | 'number' | 'boolean' | 'date' | 'json' | 'array';
  options?: string[];
}

export interface FilterValue {
  attributeId: string;
  values: string[];
}

export interface ActiveFilter {
  attributeId: string;
  attributeName: string;
  values: string[];
}