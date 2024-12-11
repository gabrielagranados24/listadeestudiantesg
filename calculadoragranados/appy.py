import os
import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt 
from flask import Flask, render_template 


@app.get('/') 
def single_converter(): 
	# Get the matplotlib plot 
	plot = get_plot() 

	# Save the figure in the static directory 
	plot.savefig(os.path.join('static', 'images', 'plot.png')) 

	return render_template('index.html') 

# Main Driver Function 
if __name__ == '__main__': 
	# Run the application on the local development server 
	app.run(debug=True) 