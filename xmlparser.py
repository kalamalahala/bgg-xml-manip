import xml.etree.ElementTree as etree

tree = etree.parse('collection-master.xml')
root = tree.getroot()
collectionList = []

for item in root.findall('item'):
    objectid = int(item.get('objectid'))
    collectionList.append(objectid)

print collectionList