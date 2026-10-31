#!/usr/bin/env python3
"""Ставить номер збірки в index.html і version.json.
Використання: python3 build.py [BUILD_ID]   (за замовчуванням — поточний час UTC, YYYYMMDDHHMM)"""
import re, sys, json, datetime, pathlib
root = pathlib.Path(__file__).parent
bid = int(sys.argv[1]) if len(sys.argv) > 1 else int(datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%d%H%M'))
p = root / 'index.html'
s = p.read_text(encoding='utf-8')
s, n = re.subn(r'const GAME_BUILD = \d+;', f'const GAME_BUILD = {bid};', s)
assert n == 1, 'GAME_BUILD not found'
p.write_text(s, encoding='utf-8')
(root / 'version.json').write_text(json.dumps({'build': bid}) + '\n', encoding='utf-8')
print('build', bid)
