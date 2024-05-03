import pyautogui
from time import sleep
sleep(3)
num = 0
while True:
    try:
        # 根据图片dishu1.png来找到屏幕上的相似的目标坐标并赋值给location_dishu
        location_dishu = pyautogui.locateCenterOnScreen("H:\\lzl_workspace\\python_demo\\hello_world\\linux_scripts\\pyautogui_demo\\hitMouse\\dishu1.png", confidence=0.8)
        if location_dishu is not None:
            # 控制鼠标移动到目标的x，y坐标 然后点击一下鼠标左键 打击地鼠
            pyautogui.click(location_dishu.x, location_dishu.y, clicks=1, interval=0.01, duration=0)
            num += 1
            print("打到%d只" % num)
            # 这里是控制鼠标移动到（500,252）坐标 避免鼠标遮挡地鼠
            pyautogui.moveTo(500, 252, duration=0)
            
    except pyautogui.ImageNotFoundException:
        print('ImageNotFoundException: image not found')
        
# https://juejin.cn/post/7242252283902607419        