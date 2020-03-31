from selenium import webdriver
from selenium.webdriver.common.keys import Keys
#from selenium.webdriver.support.ui import Select #I'm not sure if you need this line or not
import time
from unittest import main, TestCase

class GUITests(TestCase):
    
    def set_up(self) :
        self.driver = webdriver.Chrome('/chromedriver')
        time.sleep(5)
        self.driver.get("https://www.parkprotection.me/")
        
    def test_name(self):
        button_name = self.driver.find_element_by_link_text('Get Started')

        button_name.click()

        time.sleep(5)
        expected_result = 'Parks'
        actual_result = self.browser.find_element_by_class_name('PageHeader').text

        self.assertEqual(expected_result, actual_result)
        
    def tear_down(self) :
        self.driver.close()

if name == 'main':
    unittest.main()
#parks 44pgs, plants 43pgs, animals 58pgs
