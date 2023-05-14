from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
import time

import pytest

@pytest.mark.usefixtures("driver_init")
class BasicTest:
    pass
class Test_URL_Chrome(BasicTest):
    def test_website_title(self):
        self.driver.get('file:///Users/zhenglu/Documents/CS297P/Frontend/betting-site/login.html')
        self.driver.maximize_window()
        
        expected_title = "Betting Website"

        assert expected_title == self.driver.title

    def test_nav_home_title(self):
        #self.driver.get('file:///Users/zhenglu/Documents/CS297P/Frontend/betting-site/login.html')
        #self.driver.maximize_window()
        
        self.driver.find_element(By.CLASS_NAME, "nav-link").click()
        heading_element = self.driver.find_element(By.CLASS_NAME, "heading")
        
        expected_title = "Betting Site Home Page"

        assert expected_title == heading_element.text
    
    def test_nav_bet_title(self):
        #self.driver.get('file:///Users/zhenglu/Documents/CS297P/Frontend/betting-site/login.html')
        #self.driver.maximize_window()
        
        self.driver.find_element(By.XPATH, "/html/body/header/nav/div/ul[1]/li[2]").click()
        heading_element = self.driver.find_element(By.CLASS_NAME, "heading")
        
        expected_title = "The Games that can bet for now"

        assert expected_title == heading_element.text
    
    def test_nav_history_title(self):
        #self.driver.get('file:///Users/zhenglu/Documents/CS297P/Frontend/betting-site/login.html')
        #self.driver.maximize_window()
        
        self.driver.find_element(By.XPATH, "/html/body/header/nav/div/ul[1]/li[3]").click()
        heading_element = self.driver.find_element(By.CLASS_NAME, "heading")
        
        expected_title = "Purchase History"

        assert expected_title == heading_element.text

    def test_nav_aboutus_title(self):
        #self.driver.get('file:///Users/zhenglu/Documents/CS297P/Frontend/betting-site/login.html')
        #self.driver.maximize_window()
        
        self.driver.find_element(By.XPATH, "/html/body/header/nav/div/ul[1]/li[4]").click()
        heading_element = self.driver.find_element(By.CLASS_NAME, "heading")
        
        expected_title = "About Our Team"

        assert expected_title == heading_element.text
    
    def test_nav_contactus_title(self):
        #self.driver.get('file:///Users/zhenglu/Documents/CS297P/Frontend/betting-site/login.html')
        #self.driver.maximize_window()
        
        self.driver.find_element(By.XPATH, " /html/body/header/nav/div/ul[1]/li[5]").click()
        heading_element = self.driver.find_element(By.CLASS_NAME, "heading")
        
        expected_title = "Contact Us"

        assert expected_title == heading_element.text