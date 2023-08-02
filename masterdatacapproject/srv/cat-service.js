/**
* Implementation for CatalogService defined in ./cat-service.cds
*/
const cds = require('@sap/cds')
module.exports = function (){
  // Register your event handlers in here, e.g....
  this.after ('READ','Clients', each => {
    each.name += ` event this.after(READ, Clients)`
  })

  this.on("createClient", async req => {
    const name    = req.data.name;
    const city    = req.data.city;
    const state   = req.data.state;
    const country = req.data.country;
    const address = req.data.address;

    if (1) {
      return true;      
    } else {
      return false;
    }
  })

  this.on("readClient", async req => {
        
    const name = req.data.name;

    // req.query.SELECT.limit.rows.val = 1000;
    const oSelect = await db.run(
        SELECT.from(Clients).where `name like %` + name + `%`
    )

    return oSelect;
  })

}

