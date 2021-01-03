import undetected_chromedriver as uc
import time


def main(tst):
    driver = uc.Chrome()
    driver.get('https://www.google.com/')
    print(tst)
    time.sleep(5)
    driver.close()


if __name__ == '__main__':
    main(tst=1)
