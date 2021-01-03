import undetected_chromedriver as uc
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException, WebDriverException
import time
import random


def wait_random(min_t, max_t):
    time.sleep(random.randrange(min_t, max_t))


def write(placeholder, text):
    for i in text:
        time.sleep(random.randrange(1, 15) / 10)
        placeholder.send_keys(i)


def main(username, password, users_list, comments_list):
    # with open('./backend/static/instabot/lists/usragents.txt') as f:
    #     USER_AGENT_PARTS = f.readlines()
    # with open('./lists/usragents.txt') as f:
    #     USER_AGENT_PARTS = f.readlines()

    opts = uc.ChromeOptions()
    opts.add_argument('--headless')

    base_url = 'https://www.instagram.com'
    print("got before")
    driver = uc.Chrome(options=opts)
    print("got after")
    # driver = uc.Chrome()
    driver.get(base_url)
    wait_random(3, 6)

    try:
        cookie_div = driver.find_element_by_class_name("mt3GC")
        cookie_btn = cookie_div.find_elements_by_tag_name('button')[0]
        wait_random(3, 6)
        cookie_btn.click()
        print("got after cookie btn")
    except NoSuchElementException as e:
        pass

    login_form = driver.find_element_by_id('loginForm')
    form_usr = login_form.find_elements_by_tag_name('label')[0]
    form_pass = login_form.find_elements_by_tag_name('label')[1]

    write(form_usr, username)
    wait_random(1, 3)
    print("got after username")

    write(form_pass, password)
    wait_random(1, 4)
    print("got after password")

    form_pass.send_keys(Keys.ENTER)
    wait_random(4, 8)

    try:
        save_login = driver.find_element_by_class_name("cmbtv")
        save_login.click()
        wait_random(2, 4)
        print("got after savelogin")
    except NoSuchElementException:
        pass

    try:
        notifications_div = driver.find_element_by_class_name("mt3GC")
        notifications_btn = notifications_div.find_elements_by_tag_name('button')[1]
        wait_random(2, 4)
        notifications_btn.click()
        print("got after notifbtn")
    except NoSuchElementException:
        pass

    wait_random(2, 7)

    # if len(users_list) > len(comments_list):
    #     diff = len(users_list) - len(comments_list)
    #     comments_list.extend(comments_list[:diff])

    for user, comm in zip(users_list, comments_list):
        try:
            driver.get(base_url + '/' + user + '/')
            wait_random(2, 5)

            article_holder = driver.find_element_by_class_name('ySN3v')
            first_photo_link = article_holder.find_element_by_tag_name('a')
            driver.get(first_photo_link.get_attribute('href'))
            wait_random(3, 5)

            like_div = driver.find_element_by_class_name('eo2As')
            like_btn, comm_btn = like_div.find_elements_by_tag_name('button')[:2]
            like_btn.click()
            wait_random(2, 6)
            print("got after like")

            comm_btn.click()
            wait_random(1, 2)

            comm_form = driver.find_element_by_class_name('RxpZH').find_element_by_tag_name('form')
            comm_text = comm_form.find_element_by_tag_name('textarea')

            write(comm_text, comm)
            comm_text.send_keys(Keys.ENTER)
            wait_random(2, 4)
            print("got after user")
        except NoSuchElementException:
            pass
        except WebDriverException:
            pass
        wait_random(5, 10)

    driver.close()


if __name__ == '__main__':
    users_lst = ['foameee', 'francescaferonee', 'iuliaaa21', 'atlaur']
    comm_lst = [
        'Buna',
        'Te pup dulshe',
        'Hai sa petrecem'
    ]
    # username = 'faaathershadows'
    # password = 'Hastings#1066'
    main('faaathershadows', 'Hastings#1066', users_lst, comm_lst)


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

