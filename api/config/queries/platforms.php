<?php
   define('QUERY_ALL_PLATFORMS', 
      'SELECT platform.id, platform.name, platform.release_date, 
               platform.manufacturer_id, manufacturer.name manufacturer 
         FROM platform 
            JOIN manufacturer ON platform.manufacturer_id = manufacturer.id
         ORDER BY platform.name ASC');

       