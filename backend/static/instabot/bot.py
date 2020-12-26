import undetected_chromedriver as uc
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import NoSuchElementException
import time
import random


username = 'faaathershadows'
password = 'Hastings#1066'


def wait_random(min_t, max_t):
    time.sleep(random.randrange(min_t, max_t))


def write(placeholder, text):
    for i in text:
        time.sleep(random.randrange(1, 20) / 10)
        placeholder.send_keys(i)


def main():
    with open('./backend/static/instabot/lists/usragents.txt') as f:
        USER_AGENT_PARTS = f.readlines()

    opts = Options()
    opts.add_argument(f'user-agent={random.choice(USER_AGENT_PARTS)}')

    driver = uc.Chrome(options=opts)
    driver.get('https://www.instagram.com')
    wait_random(4, 10)

    try:
        cookie_div = driver.find_element_by_class_name("mt3GC")
        cookie_btn = cookie_div.find_elements_by_tag_name('button')[0]
        wait_random(3, 10)
        cookie_btn.click()
    except NoSuchElementException as e:
        pass

    login_form = driver.find_element_by_id('loginForm')
    form_usr = login_form.find_elements_by_tag_name('label')[0]
    form_pass = login_form.find_elements_by_tag_name('label')[1]

    write(form_usr, username)
    wait_random(2, 8)

    write(form_pass, password)
    wait_random(1, 5)

    form_pass.send_keys(Keys.ENTER)
    wait_random(4, 12)

    try:
        save_login = driver.find_element_by_class_name("cmbtv")
        save_login.click()
        wait_random(2, 8)
    except NoSuchElementException:
        pass

    try:
        notifications_div = driver.find_element_by_class_name("mt3GC")
        notifications_btn = notifications_div.find_elements_by_tag_name('button')[1]
        wait_random(2, 8)
        notifications_btn.click()
    except NoSuchElementException:
        pass

    wait_random(10, 20)
    driver.close()


'''
    pre_bot
    agent = driver.execute_script("return navigator.userAgent")

def pre_bot():
    with open("./backend/static/instabot/lists/useragents.txt", 'r') as f:
        usragents = f.readlines()

    with open('./backend/static/instabot/lists/usragents.txt', 'w') as f:
        for usr in usragents:

            if 'Mozilla/5.0' == usr[:11]:
                f.write(usr)
'''

