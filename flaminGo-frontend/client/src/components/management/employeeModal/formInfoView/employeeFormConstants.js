export const fields = [
  { field: 'name', name: 'Name', mandatory: true },

  { field: 'address1', name: 'Address 1', mandatory: true },
  { field: 'address2', name: 'Address 2' },
  { field: 'city', name: 'City', mandatory: true },
  { field: 'state', name: 'State' },
  { field: 'zipcode', name: 'Zip Code', mandatory: true },
  {
    field: 'phone',
    name: 'Phone',
    placeholder: '000-000-0000',
    mandatory: true,
  },
  {
    field: 'email',
    name: 'Email',
    placeholder: 'example@example.com',
    mandatory: true,
  },
  { field: 'wage', name: 'Hourly Wage', placeholder: '$', mandatory: true },
  {
    field: 'startDate',
    name: 'Start Date',
    placeholder: 'YYYY-MM-DD',
    mandatory: true,
  },
];

export const mandatory = fields.filter((row) =>
  row.hasOwnProperty('mandatory')
);
