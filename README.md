# api-server

* API Endpoint for Traffic Data

## GET /incidents

<d1>
<dt><strong>DESCRIPTION:</strong></dt>
<dd>The default route.</dd>

<dt><strong>SPECS:</strong></dt>
>  URL may contain one or more of the following query parameters:
</d1>

<ul>
<li>from: Fetch incidents beginning from this date.  Should be in a unix timestamp format.</li>
<li>to: Fetch incidents up to this date.  Should be in a unix timestamp format.</li>
<li>area: Area as defined by GET /areas</li>
<li>type: Incident type as defined by GET /types</li>
</ul>

<d1>
<dt><strong>EXAMPLES:</strong></dt>
<dd>GET /incidents?from=2014-10-31T23:59:59Z - Fetch all incidents that happened since 10/31/2014 11:59:59PM.</dd>
<dd>GET /incidents?from=2014-10-31T23:59:59Z&to=2015-01-01T00:00:00Z - Fetch all incidents that happened between 10/31/2014 11:59:59PM and 1/1/2015 12:00:00AM.</dd>
</d1>
__________________________________________________________________________
## GET /incidents/

<d1>
<dt><strong>DESCRIPTION:</strong></dt>
<dd>Retrieves all motor vehicle incidents in past 2 years.</dd>

<dt><strong>SPECS:</strong></dt>
<dd>Returns all motor vehicle incidents in 2 years.</dd>

<dt><strong>ROUTES:</strong></dt>
<dd>[incidents](http://localhost:3000/api/incidents/)</dd>
</d1>
__________________________________________________________________________
## GET /incidents/latest

<d1>
<dt><strong>DESCRIPTION:</strong></dt>
<dd>Get all incidents that occurred in the last 4 hours.</dd>

<dt><strong>SPECS:</strong></dt>
<dd>Returns all incidents ordered by date/time descending that occurred in the last 4 hours.</dd>

<dt><strong>ROUTES:</strong></dt>
<dd>[incidents/latest](http://localhost:3000/api/incidents/latest)</dd>
</d1>
__________________________________________________________________________
## GET /areas

<d1>
<dt><strong>DESCRIPTION:</strong></dt>
<dd>Fetches all areas in the database.</dd>

<dt><strong>SPECS:</strong></dt>
<dd>This should just return an array, i.e. [‘HONOLULU’, ‘KANEOHE’, ‘PEARL CITY’].</dd>
<dd>The array should contain unique values, i.e., don’t list ‘Honolulu’ twice.</dd>

<dt><strong>ROUTES:</strong></dt>
__________________________________________________________________________
## GET /types

<d1>
<dt><strong>DESCRIPTION:</strong></dt>
<dd>Fetches all incident types.</dd>

<dt><strong>SPECS:</strong></dt>
<dd>This should just return an array, i.e. [‘MOTOR VEHICLE COLLISION’, ‘HAZARDOUS DRIVER’, ‘STALLED/HAZARDOUS VEHICLE’, ‘TRAFFIC INCIDENT - NO COLLISION’, ‘TRAFFIC NUISANCE OR PARKING VIOLATION’].</dd>
<dd>The array should contain unique values.</dd>

<dt><strong>ROUTES:</strong></dt>
<dd>[type/stalled](http://localhost:3000/api/type/stalled)</dd>
<dd>[type/no-collision](http://localhost:3000/api/type/no-collision)</dd>
<dd>[type/nuisance-violation](http://localhost:3000/api/type/nuisance-violation)</dd>
<dd>[type/collision](http://localhost:3000/api/type/collision)</dd>
<dd>[type/hazardous](http://localhost:3000/api/type/hazardous)</dd>
</d1>
__________________________________________________________________________








