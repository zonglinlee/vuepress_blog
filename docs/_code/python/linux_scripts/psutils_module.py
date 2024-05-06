import psutil
# check system memory
def checkSysMemo():
  memo = psutil.virtual_memory()
  print("total Memory:",bitToGBit(memo.total))
  print("available Memory:",bitToGBit(memo.available))
  print("used Memory:",bitToGBit(memo.used))


def bitToGBit(val):
  return str(round(val/1024/1024/1024,2)) + ' GB'

# 检查cpu核数
def checkCpu():
  print("cpu 逻辑核数：",psutil.cpu_count())
  print("cpu 物理核数：",psutil.cpu_count(logical=False))

# 检查磁盘使用情况
def checkDisk():
  print("磁盘完整信息：",psutil.disk_partitions())
  
# 进程情况
def checkDisk():
  print("获取所有进程：",psutil.pids())
  

# checkSysMemo()
# checkCpu()
checkDisk()