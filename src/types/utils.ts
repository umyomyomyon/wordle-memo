type ConstantsType<T> = {
  [K in keyof T]: T[K];
}[keyof T];

export default ConstantsType;
