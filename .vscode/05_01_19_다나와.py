# from re import search
# from tkinter import BROWSE
# from webbrowser import BaseBrowser, Chrome
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
import time
import os

options = webdriver.ChromeOptions()
options.add_argument("window-size=1000,1000")
options.add_argument("no-sandbox")
options.add_argument("headless")

chrome = webdriver.Chrome("C:\Python\chromedriver.exe", options=options)
wait = WebDriverWait(chrome, 10)



def find_present(css):
    return wait.until(EC.presence_of_element_located)






def finds_visible(css):
    find_visible(css)
    return chrome.find_element_by_css_selector(css)


def find(wait, css_selector):
    return wait.until(EC.presence_of_element_located((By.CSS_SELECTOR,css_selector)))


chrome.get("https://shopping.naver.com")
find_visible("")
chrome.switch_to.frame("")




time.sleep(3)

chrome.close()