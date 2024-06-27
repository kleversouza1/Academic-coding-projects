dados = input().split()
nums = [int(v) for v in dados]
media = float(sum(nums)) / len(nums)
print('Media =','%.1f' % media)