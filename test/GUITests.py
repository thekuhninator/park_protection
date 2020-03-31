from selenium import webdriver
from selenium.webdriver.common.keys import Keys
#from selenium.webdriver.support.ui import Select #I'm not sure if you need this line or not
import time
import unittest

class GUITests(unittest.TestCase):

    def setUp(self) :
        self.driver = webdriver.Chrome(executable_path='./chromedriver')
        time.sleep(5)
         #replace with https://www.parkprotection.me/
        
    def test_name(self):
        self.driver.get("localhost:3000")
        button_name = self.driver.find_element_by_link_text('Get Started')

        button_name.click()

        time.sleep(5)
        expected_result = 'Parks'
        actual_result = self.driver.find_element_by_class_name('PageHeader').text

        self.assertEqual(expected_result, actual_result)
        
    def tearDown(self) :
        self.driver.close()

if __name__ == '__main__':
    unittest.main()
#parks 44pgs, plants 43pgs, animals 58pgs
