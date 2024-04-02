interface IcnsType {
  length: number;
  size: number;
  OS: string;
  modern?: true;
  description: string;
}

declare const types: Record<string, IcnsType>;

export = types;