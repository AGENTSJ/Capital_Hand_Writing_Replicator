class animal:
    def __init__(self,species,legs,sound):
        self.species = species
        self.legs = legs
        self.sound = sound
    def produce_sound(self):
        print(self.sound)
dog = animal("dog",4,"bark")

print(vars(dog))
import base64

with open(r"D:\ACtive\Hand_Writing_Replicator\MachineLearning\IMAGES\cap_alpha.jpg", "rb") as image_file:
    encoded_image = base64.b64encode(image_file.read()).decode("utf-8")



import numpy as np
import cv2
print(len(test))
header, base64_image_data = test.split(',')

# Decode base64 data
decoded_image_data = base64.b64decode(base64_image_data)

# Convert decoded data to NumPy array
image_array = np.frombuffer(decoded_image_data, np.uint8)

# Decode the image using OpenCV
image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)

# Display the image
cv2.imshow("Decoded Image", image)
cv2.waitKey(0)
cv2.destroyAllWindows()