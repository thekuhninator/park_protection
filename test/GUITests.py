from selenium import webdriver
from selenium.webdriver.common.keys import Keys
#from selenium.webdriver.support.ui import Select #I'm not sure if you need this line or not
import time
import unittest

class GUITests(unittest.TestCase):

    def setUp(self) :
        self.driver = webdriver.Chrome(executable_path='./chromedriver')
        time.sleep(5)
        
    def test_get_started(self):
        self.driver.get("localhost:3000")
        button_name = self.driver.find_element_by_link_text('Get Started')

        button_name.click()

        time.sleep(5)
        expected_result = 'Parks'
        actual_result = self.driver.find_element_by_class_name('PageHeader').text

        self.assertEqual(expected_result, actual_result)
    
    def test_navbar_parks(self):
        self.driver.get("localhost:3000")
        button_name = self.driver.find_element_by_link_text('Parks')

        button_name.click()

        time.sleep(5)
        expected_result = 'Parks'
        actual_result = self.driver.find_element_by_class_name('PageHeader').text

        self.assertEqual(expected_result, actual_result)
    
    def test_navbar_plants(self):
        self.driver.get("localhost:3000")
        button_name = self.driver.find_element_by_link_text('Plants')

        button_name.click()

        time.sleep(5)
        expected_result = 'Plants'
        actual_result = self.driver.find_element_by_class_name('PageHeader').text

        self.assertEqual(expected_result, actual_result)
        
    def test_navbar_animals(self):
        self.driver.get("localhost:3000")
        button_name = self.driver.find_element_by_link_text('Animals')

        button_name.click()

        time.sleep(5)
        expected_result = 'Animals'
        actual_result = self.driver.find_element_by_class_name('PageHeader').text

        self.assertEqual(expected_result, actual_result)
        
    def test_navbar_about(self):
        self.driver.get("localhost:3000")
        button_name = self.driver.find_element_by_link_text('About')

        button_name.click()

        time.sleep(5)
        expected_result = 'About'
        actual_result = self.driver.find_element_by_class_name('PageHeader').text

        self.assertEqual(expected_result, actual_result)
    def tearDown(self) :
        self.driver.close()


if __name__ == '__main__':
    unittest.main()
#parks 44pgs, plants 43pgs, animals 58pgs
