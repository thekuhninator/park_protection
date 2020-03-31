from selenium import webdriver
from selenium.webdriver.common.keys import Keys
#from selenium.webdriver.support.ui import Select #I'm not sure if you need this line or not
import time
import unittest

class GUITests(unittest.TestCase):

    def setUp(self) :
        self.driver = webdriver.Chrome(executable_path='./chromedriver')
        time.sleep(5)
        
    def test_get_started(self): #1
        self.driver.get("localhost:3000")
        button_name = self.driver.find_element_by_link_text('Get Started')

        button_name.click()

        time.sleep(5)
        expected_result = 'Parks'
        actual_result = self.driver.find_element_by_class_name('PageHeader').text

        self.assertEqual(expected_result, actual_result)
    
    def test_navbar_parks(self): #2
        self.driver.get("localhost:3000")
        button_name = self.driver.find_element_by_link_text('Parks')

        button_name.click()

        time.sleep(5)
        expected_result = 'Parks'
        actual_result = self.driver.find_element_by_class_name('PageHeader').text

        self.assertEqual(expected_result, actual_result)
    
    def test_navbar_plants(self): #3
        self.driver.get("localhost:3000")
        button_name = self.driver.find_element_by_link_text('Plants')

        button_name.click()

        time.sleep(5)
        expected_result = 'Plants'
        actual_result = self.driver.find_element_by_class_name('PageHeader').text

        self.assertEqual(expected_result, actual_result)
        
    def test_navbar_animals(self): #4
        self.driver.get("localhost:3000")
        button_name = self.driver.find_element_by_link_text('Animals')

        button_name.click()

        time.sleep(5)
        expected_result = 'Animals'
        actual_result = self.driver.find_element_by_class_name('PageHeader').text

        self.assertEqual(expected_result, actual_result)
        
    def test_navbar_about(self): #5
        self.driver.get("localhost:3000")
        button_name = self.driver.find_element_by_link_text('About')

        button_name.click()

        time.sleep(5)
        expected_result = 'About Us'
        actual_result = self.driver.find_element_by_class_name('PageHeader').text

        self.assertEqual(expected_result, actual_result)
        
        def test_park_card(self): #6
        self.driver.get("parkprotection.me/Parks")
        button_name = self.driver.find_element_by_link_text('Abraham Lincoln Birthplace National Historical Park')

        button_name.click()

        time.sleep(5)
        expected_result = 'Abraham Lincoln Birthplace National Historical Park'
        actual_result = self.driver.find_element_by_class_name('PageHeader').text

        self.assertEqual(expected_result, actual_result)
    
    def test_plants_card(self): #7
        self.driver.get("parkprotection.me/Plants")
        button_name = self.driver.find_element_by_link_text('White Bladderpod')

        button_name.click()

        time.sleep(5)
        expected_result = 'White Bladderpod'
        actual_result = self.driver.find_element_by_class_name('PageHeader').text

        self.assertEqual(expected_result, actual_result)
    
    def test_animals_card(self): #8
        self.driver.get("parkprotection.me/Animals")
        button_name = self.driver.find_element_by_link_text('Florida grasshopper sparrow')

        button_name.click()

        time.sleep(5)
        expected_result = 'Florida grasshopper sparrow'
        actual_result = self.driver.find_element_by_class_name('PageHeader').text

        self.assertEqual(expected_result, actual_result)
    
    def test_animals_related_parks(self): #9
        self.driver.get("parkprotection.me/Animals/32")
        button_name = self.driver.find_element_by_link_text('Big Cypress National Preserve')

        button_name.click()

        time.sleep(5)
        expected_result = 'Big Cypress National Preserve'
        actual_result = self.driver.find_element_by_class_name('PageHeader').text

        self.assertEqual(expected_result, actual_result)

    def test_plants_related_parks(self): #10
        self.driver.get("parkprotection.me/Animals/104")
        button_name = self.driver.find_element_by_link_text('Alibates Flint Quarries National Monument')

        button_name.click()

        time.sleep(5)
        expected_result = 'Alibates Flint Quarries National Monument'
        actual_result = self.driver.find_element_by_class_name('PageHeader').text

        self.assertEqual(expected_result, actual_result)
    
    def tearDown(self) :
        self.driver.close()


if __name__ == '__main__':
    unittest.main()
#parks 44pgs, plants 43pgs, animals 58pgs
