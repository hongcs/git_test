from re import search
from tkinter import BROWSE
from webbrowser import BaseBrowser, Chrome
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

options = webdriver.ChromeOptions()
options.add_argument("window-size=1000,1000")
options.add_argument("no-sandbox")
options.add_argument("headless")

# BaseBrowser = webdriver.Chrome("C:\Python\chromedriver")
# BaseBrowser.get("http://naver.com")
# time.sleep(20)
# BaseBrowser.close()

chrome = webdriver.Chrome("C:\Python\chromedriver.exe", options=options)
chrome.get("https://shopping.naver.com")
# chrome.back()
# chrome.forward()
# time.sleep(3)
# chrome.implicitly_wait(3)
# chrome.find_element_by_css_selector("input[name=query]")
# WebDriverWait(chrome, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "input[name=query]")))
wait = WebDriverWait(chrome, 10)
# el = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "input[name=query]"))
# print(el)

def find(wait, css_selector):
    return wait.until(EC.presence_of_element_located((By.CSS_SELECTOR,css_selector)))

search = find(wait, "input[name=querry]")
search.send_keys("아이폰 케이스")

time.sleep(3)

chrome.close()