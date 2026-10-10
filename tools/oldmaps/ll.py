# ll.py clat clng zoom W H px py  -> lat lng of screenshot pixel (Web Mercator, 256px tiles)
import sys, math
def proj(lat, lng, z):
    s = 256 * 2 ** z
    x = (lng + 180) / 360 * s
    y = (1 - math.log(math.tan(math.radians(lat)) + 1 / math.cos(math.radians(lat))) / math.pi) / 2 * s
    return x, y
def unproj(x, y, z):
    s = 256 * 2 ** z
    lng = x / s * 360 - 180
    lat = math.degrees(math.atan(math.sinh(math.pi * (1 - 2 * y / s))))
    return lat, lng
def px2ll(clat, clng, z, W, H, px, py):
    cx, cy = proj(clat, clng, z)
    return unproj(cx + px - W / 2, cy + py - H / 2, z)
if __name__ == "__main__":
    a = list(map(float, sys.argv[1:]))
    print("%.6f %.6f" % px2ll(a[0], a[1], int(a[2]), a[3], a[4], a[5], a[6]))
