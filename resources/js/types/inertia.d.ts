export {};
declare global {
  export namespace inertia {
    export interface Props {
     
      jetstream: {
        [key: string]: boolean;
      };
      errorBags: unknown;
      errors: unknown;
    }
  }
}
