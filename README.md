# bgg-import

xmlparser - initially written to write all board game ID's in the /collection/ API xml to a single list

xmlscraper - called /boardgame/ API for each ID in the 606 long list, one second at a time to avoid 503s, and appended each returned xml content to an initially blank xml file

Re-wrapped the output XML file in a new parent element, and WP All Import worked like a charm.

Could probably merge parser and scraper together and have it be an all-in-one collection data scraper.
