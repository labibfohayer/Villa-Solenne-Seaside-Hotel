import re
import json

with open('/home/labib-fohayer/.gemini/antigravity/scratch/seaside-hotel/analysis/bundle/kit-C1dqFDs5.js', 'r') as f:
    text = f.read()

# Find the JSON string between backticks
m = re.search(r'JSON\.parse\(`(.*?)`\)', text, re.DOTALL)
if m:
    raw_json = m.group(1).replace(r'\"', '"').replace(r'\`', '`')
    data = json.loads(raw_json)
    
    print('TITLE:', data.get('title'))
    print('PALETTES:')
    for p in data.get('palettes', []):
        print(f"  [{p.get('name')}] (mode: {p.get('mode')})")
        for k, v in p.get('vars', {}).items():
            print(f"    {k}: {v}")
            
    print('\nCOMPONENTS:')
    for c in data.get('components', []):
        print(f"  - {c.get('name')} ({c.get('category')}): {c.get('description')}")
        
    with open('/home/labib-fohayer/.gemini/antigravity/scratch/seaside-hotel/analysis/kit_data.json', 'w') as out:
        json.dump(data, out, indent=2)
    print("\nSaved full kit data to analysis/kit_data.json")
