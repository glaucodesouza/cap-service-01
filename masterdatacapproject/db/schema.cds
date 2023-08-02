namespace mynamespace;
using { managed, cuid } from '@sap/cds/common';

  entity Clients : managed, cuid 
  {
    name: String(80);
    city: String(40);
    state: String(40);
    country: String(40);
    address: String(100);
  }