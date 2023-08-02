using { mynamespace as my } from '../db/schema';
@path: 'service/masterdata'
service CatalogService {
  entity Clients as projection on my.Clients;

  function createClient (name: String, city: String, state: String, country: String(40), address: String) returns Boolean;
  function readClient (name: String) returns array of Clients;
}