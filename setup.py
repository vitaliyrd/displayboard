from setuptools import setup, find_packages
setup(
    name="DisplayBoard",
    version="0.1",
    packages=find_packages(),
    install_requires=['django', 'sqlparse', 'pillow', 'pytz']
)
