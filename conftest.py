from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
import time

import pytest

@pytest.fixture(scope="class")
def driver_init(request):

    driver = webdriver.Chrome('./chromedriver_mac_arm64/chromedriver')
    request.cls.driver = driver
    yield
    driver.close()

