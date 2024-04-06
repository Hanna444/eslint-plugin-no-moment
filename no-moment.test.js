import noMoment from "./no-moment";
import { RuleTester } from "@typescript-eslint/rule-tester";

const ruleTester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
});

const errors = [{ message: "Moment is deprecated. Use date-fns instead." }];

ruleTester.run("no-moment", noMoment, {
  valid: [{ code: `import { getYear } from "date-fns";` }],
  invalid: [{ code: `import moment from "moment";`, errors }],
});
