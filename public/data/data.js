export const brokersList = [
  {
    title: "Cav Insure Pty Ltd",
    partner: '"Resilium"',
    location: "QLD",
    postcode: 4380,
    lat: -28.60158006,
    long: 151.8126377,
    email: "admin@cavinsure.com.au",
    website: "https://www.cavinsure.com.au",
    phone: "07 4681 3387",
    inbox: "admin@cavinsure.com.au",
  },
  {
    title: "Your Insurance Advisor Pty Ltd",
    partner: '"Resilium"',
    location: "NSW",
    postcode: 2444,
    lat: -31.439614,
    long: 152.87253,
    email: "info@yourinsuranceadvisor.com.au",
    website: "https://yourinsuranceadvisor.com.au",
    phone: "1300 199 499",
    inbox: "info@yourinsuranceadvisor.com.au",
  },
  {
    title: "Comprehensive Insurance Solutions Group Pty Ltd",
    partner: '"Resilium"',
    location: "VIC",
    postcode: 3079,
    lat: -37.772675,
    long: 145.048573,
    email: "admin@cisg.com.au",
    website: "https://www.cisg.com.au",
    phone: "03 9948 4944",
    inbox: "matt@cisg.com.au",
  },
  {
    title: "Securitex Financial Services Pty Ltd",
    partner: '"Resilium"',
    location: "SA",
    postcode: 5015,
    lat: -34.808422,
    long: 138.531567,
    email: "advice@securitex.com.au",
    website: "https://www.securitex.com.au",
    phone: "1300 660 191",
    inbox: "anthony@securitex.com.au",
  },
];

const serviceQuestions = [
  "cover_type",
  "business_type",
  "employee_count",
  "insurance_type",
  "broker_help",
];
export const stepNames = [
  "location",
  "results",
  "serviceNeeds",
  "contactDetails",
  "thankyou",
];

const businessQuestionNames = [
  serviceQuestions[0],
  serviceQuestions[1],
  serviceQuestions[2],
  serviceQuestions[3],
  serviceQuestions[4],
];

const personalQuestionNames = [
  serviceQuestions[0],
  serviceQuestions[3],
  serviceQuestions[4],
];

export const questionsByCoverType = {
  Business: businessQuestionNames,
  Personal: personalQuestionNames,
};
