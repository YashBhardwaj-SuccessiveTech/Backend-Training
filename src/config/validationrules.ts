type FieldRule = {
  required?: boolean;
  type?: "string" | "number" | "email"; // Add other types if needed
  minLength?: number;
};

type RouteValidationRules = {
  [field: string]: FieldRule;
};


const validationRules: {
  [route: string]: RouteValidationRules;
} ={
  "/register": {
    username: { required: true, type: "string" },
    password: { required: true, type: "string", minLength: 8 }
  },
  "/login": {
    username: { required: true, type: "string" },
    password: { required: true, type: "string" }
  }
} ;

export default validationRules
