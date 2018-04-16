import xml.etree.ElementTree as etree

tree = etree.parse('collection-extended-workable.xml')
root = tree.getroot()
print (root)
  
names = root[0][0].findall('name')
print (names.content)
print (root[0][0][0])