import os
import requests
from bs4 import BeautifulSoup
from urllib.request import urlopen
def get_member_since(username):
    url = f"https://www.codewars.com/users/{username}"
    page = urlopen(url)
    html_bytes = page.read()
    html = html_bytes.decode("utf-8")
    soup = BeautifulSoup(html, "html.parser")
    mem = [x.text for x in soup.select('div.stat-box div.stat')]
    arr = []
    for x in mem:
        if 'Member Since:' in x:
            return str(x.split(':')[1])