
(function(){
	"use strict";
        
        
	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;
         
         helpers.extend(Chart.defaults.global,{animation:false});
         helpers.extend(Chart.defaults.global,{tooltipTemplateLabel: "<%if (label){%><%=label%><%}%>"});
         helpers.extend(Chart.defaults.global,{tooltipTemplateTextX: "<%if (labelX){%><%=labelX%>: <%}%><%=valueX%>"});
         helpers.extend(Chart.defaults.global,{tooltipTemplateTextY: "<%if (labelY){%><%=labelY%>: <%}%><%=valueY%>"});
         
         helpers.extend(Chart.Element.prototype,{
             hasValue: function(){
			return helpers.isNumber(this.valueX) && helpers.isNumber(this.valueY);
		}
         });
         
         
         helpers.extend(Chart.Type.prototype,
         {
             showTooltip : function(ChartElements, forceRedraw){
			// Only redraw the chart if we've actually changed what we're hovering on.
			if (typeof this.activeElements === 'undefined') this.activeElements = [];

			var isChanged = (function(Elements){
				var changed = false;

				if (Elements.length !== this.activeElements.length){
					changed = true;
					return changed;
				}

				helpers.each(Elements, function(element, index){
					if (element !== this.activeElements[index]){
						changed = true;
					}
				}, this);
				return changed;
			}  ).call(this, ChartElements);

			if (!isChanged && !forceRedraw){
				return;
			}
			else{
				this.activeElements = ChartElements;
			}
			this.draw();
			if(this.options.customTooltips){
				this.options.customTooltips(false);
			}
                        
				// If we have multiple datasets, show a MultiTooltip for all of the data points at that index	
					helpers.each(ChartElements, function(Element) {
						var tooltipPosition = Element.tooltipPosition();
						new Chart.Tooltip({
							x: Math.round(tooltipPosition.x),
							y: Math.round(tooltipPosition.y),
							xPadding: this.options.tooltipXPadding,
							yPadding: this.options.tooltipYPadding,
							fillColor: this.options.tooltipFillColor,
							textColor: this.options.tooltipFontColor,
							fontFamily: this.options.tooltipFontFamily,
							fontStyle: this.options.tooltipFontStyle,
							fontSize: this.options.tooltipFontSize,
							caretHeight: this.options.tooltipCaretSize,
							cornerRadius: this.options.tooltipCornerRadius,
							textLabel: helpers.template(this.options.tooltipTemplateLabel, Element),
                                                        textX:helpers.template(this.options.tooltipTemplateTextX, Element),
                                                        textY:helpers.template(this.options.tooltipTemplateTextY, Element),
							chart: this.chart,
							custom: this.options.customTooltips
						}).draw();
					}, this);
			return this;
		}
         });
         
         
         Chart.Tooltip = Chart.Element.extend({
		draw : function(){

			var ctx = this.chart.ctx;

			ctx.font = helpers.fontString(this.fontSize,this.fontStyle,this.fontFamily);

			this.xAlign = "center";
			this.yAlign = "above";

			//Distance between the actual element.y position and the start of the tooltip caret
			var caretPadding = this.caretPadding = 2;

                        var txt=new Array();
                        txt.push(this.textLabel);
                        txt.push(this.textX);
                        txt.push(this.textY);
                        helpers.longestText(ctx,this.font,txt);
                        
			var tooltipWidth = helpers.longestText(ctx,this.font,txt) + 2*this.xPadding,
                                
			tooltipRectHeight = (this.fontSize*3) + 3*this.yPadding+8,
			tooltipHeight = tooltipRectHeight + this.caretHeight + caretPadding;

			if (this.x + tooltipWidth/2 >this.chart.width){
				this.xAlign = "left";
			} else if (this.x - tooltipWidth/2 < 0){
				this.xAlign = "right";
			}

			if (this.y - tooltipHeight < 0){
				this.yAlign = "below";
			}


			var tooltipX = this.x - tooltipWidth/2,
				tooltipY = this.y - tooltipHeight;

			ctx.fillStyle = this.fillColor;

			// Custom Tooltips
			if(this.custom){
				this.custom(this);
			}
			else{
                                
				switch(this.yAlign)
				{
				case "above":
					//Draw a caret above the x/y
					ctx.beginPath();
					ctx.moveTo(this.x,this.y - caretPadding);
					ctx.lineTo(this.x + this.caretHeight, this.y - (caretPadding + this.caretHeight));
					ctx.lineTo(this.x - this.caretHeight, this.y - (caretPadding + this.caretHeight));
					ctx.closePath();
					ctx.fill();
					break;
				case "below":
					tooltipY = this.y + caretPadding + this.caretHeight;
					//Draw a caret below the x/y
					ctx.beginPath();
					ctx.moveTo(this.x, this.y + caretPadding);
					ctx.lineTo(this.x + this.caretHeight, this.y + caretPadding + this.caretHeight);
					ctx.lineTo(this.x - this.caretHeight, this.y + caretPadding + this.caretHeight);
					ctx.closePath();
					ctx.fill();
					break;
				}

				switch(this.xAlign)
				{
				case "left":
					tooltipX = this.x - tooltipWidth + (this.cornerRadius + this.caretHeight);
					break;
				case "right":
					tooltipX = this.x - (this.cornerRadius + this.caretHeight);
					break;
				}

				helpers.drawRoundedRectangle(ctx,tooltipX,tooltipY,tooltipWidth,tooltipRectHeight,this.cornerRadius);

				ctx.fill();
				ctx.fillStyle = this.textColor;
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText(this.textLabel, tooltipX+ tooltipWidth/2, tooltipY + (3*this.yPadding));
                                ctx.textAlign = "left";
                                ctx.fillText(this.textX, tooltipX+(this.xPadding), tooltipY + this.fontSize +(3*this.yPadding)+4);
                                ctx.fillText(this.textY, tooltipX+(this.xPadding), tooltipY + (this.fontSize)*2 +(3*this.yPadding)+8);
                                
			}
		}
	});
         
         
                
         Chart.Scale =Chart.Element.extend({
                initialize : function(){
			this.fit();
		},
		buildYLabels : function(){
			this.yLabels = [];

			var stepDecimalPlaces = helpers.getDecimalPlaces(this.stepValue);

			for (var i=0; i<=this.steps; i++){
				this.yLabels.push(helpers.template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
			}
			this.yLabelWidth = (this.display && this.showLabels) ? helpers.longestText(this.ctx,this.font,this.yLabels) : 0;
		},
                /*
                 * modificcaion
                 */
                buildXLabels : function(){
			this.xLabels = [];
			var stepDecimalPlaces = helpers.getDecimalPlaces(this.stepValueX);
			for (var i=0; i<=this.stepsX; i++){
				this.xLabels.push(helpers.template(this.templateString,{value:(this.minX + (i * this.stepValueX)).toFixed(stepDecimalPlaces)}));
			}
			this.xLabelWidth = (this.display && this.showLabels) ? helpers.longestText(this.ctx,this.font,this.xLabels) : 0;
		}
                ,
		// Fitting loop to rotate x Labels and figure out what fits there, and also calculate how many Y steps to use
		fit: function(){
			// First we need the width of the yLabels, assuming the xLabels aren't rotated

			// To do that we need the base line at the top and base of the chart, assuming there is no x label rotation
			this.startPoint = (this.display) ? this.fontSize : 0;
			this.endPoint = (this.display) ? this.height - (this.fontSize * 1.5) - 5 : this.height; // -5 to pad labels
                        
			// Apply padding settings to the start and end point.
			this.startPoint += this.padding;
			this.endPoint -= this.padding;
                        
                        
                        this.startPointX = (this.display) ? this.fontSize : 0;
			this.endPointX = (this.display) ? this.width - (this.fontSize * 1.5) - 5 : this.width; // -5 to pad labels

			// Apply padding settings to the start and end point.
			this.startPointX += this.padding;
			this.endPointX -= this.padding;

			// Cache the starting height, so can determine if we need to recalculate the scale yAxis
			var cachedHeight = this.endPoint - this.startPoint,
				cachedYLabelWidth;
                        var cachedWidth =this.endPointX-this.startPointX;
                        
                        
                        
                        
			// Build the current yLabels so we have an idea of what size they'll be to start
			/*
			 *	This sets what is returned from calculateScaleRange as static properties of this class:
			 *
				this.steps;
				this.stepValue;
				this.min;
				this.max;
			 *
			 */
                        
			this.calculateYRange(cachedHeight);
                        this.calculateXRange(cachedWidth);
                        

			// With these properties set we can now build the array of yLabels
			// and also the width of the largest yLabel
			this.buildYLabels();
                        this.buildXLabels();
                        
			this.calculateXLabelRotation();

			while((cachedHeight > this.endPoint - this.startPoint)){
				cachedHeight = this.endPoint - this.startPoint;
				cachedYLabelWidth = this.yLabelWidth;

				this.calculateYRange(cachedHeight);
				this.buildYLabels();

				// Only go through the xLabel loop again if the yLabel width has changed
				if (cachedYLabelWidth < this.yLabelWidth){
					this.calculateXLabelRotation();
				}
			}

		},
                
                calculateXLabelRotation : function(){
			//Get the width of each grid by calculating the difference
			//between x offsets between 0 and 1.

			this.ctx.font = this.font;
			var firstWidth = this.ctx.measureText(this.xLabels[0]).width,
				lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width,
				firstRotated,
				lastRotated;
			this.xScalePaddingRight = lastWidth/2 + 3;
			this.xScalePaddingLeft = (firstWidth/2 > this.yLabelWidth + 10) ? firstWidth/2 : this.yLabelWidth + 10;

			this.xLabelRotation = 0;
			if (this.display){
				var originalLabelWidth = helpers.longestText(this.ctx,this.font,this.xLabels),
					cosRotation,
					firstRotatedWidth;
				this.xLabelWidth = originalLabelWidth;
				//Allow 3 pixels x2 padding either side for label readability
				var xGridWidth = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6;

                                
				//Max label rotate should be 90 - also act as a loop counter
				while ((this.xLabelWidth > xGridWidth && this.xLabelRotation === 0) || (this.xLabelWidth > xGridWidth && this.xLabelRotation <= 90 && this.xLabelRotation > 0)){
					cosRotation = Math.cos(helpers.radians(this.xLabelRotation));

					firstRotated = cosRotation * firstWidth;
					lastRotated = cosRotation * lastWidth;

					// We're right aligning the text now.
					if (firstRotated + this.fontSize / 2 > this.yLabelWidth + 8){
						this.xScalePaddingLeft = firstRotated + this.fontSize / 2;
					}
					this.xScalePaddingRight = this.fontSize/2;


					this.xLabelRotation++;
					this.xLabelWidth = cosRotation * originalLabelWidth;

				}
				if (this.xLabelRotation > 0){
					this.endPoint -= Math.sin(helpers.radians(this.xLabelRotation))*originalLabelWidth + 3;
				}
			}
			else{
				this.xLabelWidth = 0;
				this.xScalePaddingRight = this.padding;
				this.xScalePaddingLeft = this.padding;
			}

		},
		// Needs to be overidden in each Chart type
		// Otherwise we need to pass all the data into the scale class
		calculateYRange: helpers.noop,
                calculateXRange: helpers.noop,
		drawingAreaY: function(){
			return this.startPoint - this.endPoint;
		},
                drawingAreaX: function(){
			return this.startPointX - this.endPointX;
		},
                
		calculateY : function(value){
                    
			var scalingFactor = this.drawingAreaY() / (this.min - this.max);
			return this.endPoint - (scalingFactor * (value - this.min));
		},
                calculateX : function(value){
                    
                        var scalingFactor = this.drawingAreaX() / (this.minX - this.maxX);
			return this.startPointX+(Math.round(this.xScalePaddingLeft/2))+3+ (scalingFactor * (value - this.minX));
		},
                
		draw : function(){
                    
			var ctx = this.ctx,
				yLabelGap = (this.endPoint - this.startPoint) / this.steps,
                                xLabelGap = (this.endPointX - this.startPointX) / this.stepsX,
				xStart = Math.round(this.xScalePaddingLeft);
                                
			if (this.display){
				ctx.fillStyle = this.textColor;
				ctx.font = this.font;
				helpers.each(this.yLabels,function(labelString,index){
                                        
					var yLabelCenter = this.endPoint - (yLabelGap * index),
						linePositionY = Math.round(yLabelCenter),
						drawHorizontalLine = this.showHorizontalLines;

					ctx.textAlign = "right";
					ctx.textBaseline = "middle";
					if (this.showLabels){
						ctx.fillText(labelString,xStart - 10,yLabelCenter);
					}

					// This is X axis, so draw it
					if (index === 0 && !drawHorizontalLine){
						drawHorizontalLine = true;
					}

					if (drawHorizontalLine){
						ctx.beginPath();
					}

					if (index > 0){
						// This is a grid line in the centre, so drop that
						ctx.lineWidth = this.gridLineWidth;
						ctx.strokeStyle = this.gridLineColor;
					} else {
						// This is the first line on the scale
						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
					}

					linePositionY += helpers.aliasPixel(ctx.lineWidth);

					if(drawHorizontalLine){
						ctx.moveTo(xStart, linePositionY);
						ctx.lineTo(this.width, linePositionY);
						ctx.stroke();
						ctx.closePath();
					}

					ctx.lineWidth = this.lineWidth;
					ctx.strokeStyle = this.lineColor;
					ctx.beginPath();
					ctx.moveTo(xStart - 5, linePositionY);
					ctx.lineTo(xStart, linePositionY);
					ctx.stroke();
					ctx.closePath();

				},this);

				helpers.each(this.xLabels,function(label,index){
                                        
                                        var xLabelCenter = (xLabelGap * index)+Math.round(this.xScalePaddingLeft),
                                            linePositionX = Math.round(xLabelCenter),
                                            linePos=linePositionX;
					var isRotated = (this.xLabelRotation > 0),
					drawVerticalLine = this.showVerticalLines;
					if (index === 0 && !drawVerticalLine){
						drawVerticalLine = true;
					}

					if (drawVerticalLine){
						ctx.beginPath();
					}

					if (index > 0){
						// This is a grid line in the centre, so drop that
						ctx.lineWidth = this.gridLineWidth;
						ctx.strokeStyle = this.gridLineColor;
					} else {
						// This is the first line on the scale
						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
					}

					if (drawVerticalLine){
						ctx.moveTo(linePos,this.endPoint);
						ctx.lineTo(linePos,this.startPoint - 3);
						ctx.stroke();
						ctx.closePath();
					}


					ctx.lineWidth = this.lineWidth;
					ctx.strokeStyle = this.lineColor;


					// Small lines at the bottom of the base grid line
					ctx.beginPath();
					ctx.moveTo(linePos,this.endPoint);
					ctx.lineTo(linePos,this.endPoint + 5);
					ctx.stroke();
					ctx.closePath();

					ctx.save();
					ctx.translate(linePos,(isRotated) ? this.endPoint + 12 : this.endPoint + 8);
					ctx.rotate(helpers.radians(this.xLabelRotation)*-1);
					ctx.font = this.font;
					ctx.textAlign = (isRotated) ? "right" : "center";
					ctx.textBaseline = (isRotated) ? "middle" : "top";
					ctx.fillText(label, 0, 0);
					ctx.restore();
				},this);
			}
		}

	});
                
                
                
         Chart.PointImg = Chart.Element.extend({
                imgHeight:0,
                imgWidth:0,
			draw : function()
                        {
                            
			var ctx = this.ctx,
				top = this.base - (this.base - this.y);
                           if(!(this.src=="undefined" || this.src==null))
                           {
                               
                                var img = new Image();
                                img.src = this.src;
                                this.imgHeight=img.height;
                                this.imgWidth=img.width;
                                this.ctx.drawImage(img, this.x-(this.imgWidth/2), top-(img.height/2));
                                ctx.beginPath();
				ctx.arc(this.x, top, 3, 0, Math.PI*2);
				ctx.closePath();
				ctx.strokeStyle = this.strokeColor;
				ctx.lineWidth = this.strokeWidth;
				ctx.fillStyle = this.fillColor;
				ctx.fill();
				ctx.stroke();
                           }
                           
		},
		height : function(){
			return this.base - this.y;
		},
		inRange : function(chartX,chartY){
                        
			var leftX = this.x - (this.imgWidth/4),
			rightX = this.x + (this.imgWidth/4),
			top = this.base - (this.base - this.y);
                        if(this.imgWidth==0 ||this.imgHeight==0)
                        {
                            return false;
                        }else
                        {
                            return (chartX>=leftX && chartX<=rightX && chartY>=top-(this.imgHeight/4) && chartY<=top+(this.imgHeight/4))
                        }
                        
		}
	});
        
         Chart.LineProm = Chart.Element.extend({
			draw : function()
                        {
                            
			var ctx = this.ctx,
				top = this.endPointY - (this.endPointY - this.y);
                                
                                
                                
                                this.ctx.beginPath();
                                    ctx.lineWidth = 2;
                                    ctx.fillStyle = this.fillColor;
                                    ctx.strokeStyle = this.strokeColor;
                                    this.ctx.moveTo(this.x,this.endPointY);
                                    this.ctx.lineTo(this.x,this.startPointY);
                                    ctx.fill();
                                    ctx.stroke();
				this.ctx.closePath();
                                
                                
                                this.ctx.beginPath();
                                    this.ctx.moveTo(this.xScalePaddingLeft,this.y);
                                    this.ctx.lineTo(this.width-3,this.y);
                                    ctx.strokeStyle = this.strokeColor;
                                    ctx.lineWidth = 2;
                                    ctx.fillStyle = this.fillColor;
                                    ctx.fill();
                                    ctx.stroke();
                                this.ctx.closePath();

                                
                                this.ctx.beginPath();
                                    this.ctx.arc(this.x, top, 5, 0, Math.PI*2);
                                    ctx.strokeStyle = this.strokeColor;
                                    ctx.lineWidth = 1;
                                    ctx.fillStyle = this.fillColor;
                                    ctx.fill();
                                    ctx.stroke();
				this.ctx.closePath();
                                
                                
                                this.ctx.save();
                                this.ctx.fillStyle = this.textColor;
				this.ctx.font = this.font;
                                this.ctx.textAlign = "right";
                                this.ctx.textBaseline = "middle";
                                this.ctx.fillText(this.valueX,this.x+(this.ctx.measureText(this.valueX.toString()).width)+12,this.y-8);
                                this.ctx.translate(this.x-8, this.y-(this.ctx.measureText(this.valueY.toString()).width)-12 );
                                this.ctx.rotate(helpers.radians(90)*-1);
                                this.ctx.fillText(this.valueX,0,0);
                                this.ctx.restore();

		},
		inRange : function(chartX,chartY){
			return (chartX>=(this.x-8) && chartX<=(this.x+8)) && (chartY>=(this.y-8) && chartY<=(this.y+8));
		}
	});


	var defaultConfig = {
		//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
		scaleBeginAtZero : true,

		//Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,

		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",

		//Number - Width of the grid lines
		scaleGridLineWidth : 1,

		//Boolean - Whether to show horizontal lines (except X axis)
		scaleShowHorizontalLines: true,

		//Boolean - Whether to show vertical lines (except Y axis)
		scaleShowVerticalLines: true,
		//Number - Pixel width of the pointImg stroke
		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

	};


	Chart.Type.extend({ 
		name: "DispersalImg",
		defaults : defaultConfig,
		initialize:  function(data){

			//Expose options as a scope variable here so we can access it in the ScaleClass
			var options = this.options;

			this.ScaleClass = Chart.Scale.extend({
				offsetGridLines : true
			});

			this.datasets = [];

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeBars = (evt.type !== 'mouseout') ? this.getBarsAtEvent(evt) : [];

					this.eachPointsImg(function(pointImg){
						pointImg.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activeBars, function(activeBar){
						activeBar.fillColor = activeBar.highlightFill;
						activeBar.strokeColor = activeBar.highlightStroke;
					});
					this.showTooltip(activeBars);
				});
			}

			//Declare the extension of the default point, to cater for the options passed in to the constructor
			this.PointImg = Chart.PointImg.extend({	ctx : this.chart.ctx});
                        this.PointProm=Chart.LineProm.extend({ctx : this.chart.ctx});
                        
                        

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset,datasetIndex){

				var datasetObject = {
					label : dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					PointsImg : [],
                                        lineProm:null
				};

				this.datasets.push(datasetObject);
                                var i=0,sumX=0,sumY=0;
                                
				helpers.each(dataset.dataXY,function(dataPoint,index){
                                        i++;
                                        sumX+=dataPoint.x;
                                        sumY+=dataPoint.y;
                                    	//Add a new point for each piece of data, passing any required data to draw.
					datasetObject.PointsImg.push(new this.PointImg({
						valueX :dataPoint.x,
                                                valueY:dataPoint.y,
                                                labelX:data.labelX,
                                                labelY:data.labelY,
                                                src:dataPoint.imgSrc,
						label : data.labels[index],
						datasetLabel: dataset.label,
						strokeColor : dataset.strokeColor,
						fillColor : dataset.fillColor,
						highlightFill : dataset.highlightFill || dataset.fillColor,
						highlightStroke : dataset.highlightStroke || dataset.strokeColor
					}));
				},this);                                
                                datasetObject.lineProm=new this.PointProm({
                                            
                                              valueX:parseFloat(sumX/i).toFixed(2),
                                              valueY:parseFloat(sumY/i).toFixed(2),
                                              label:data.labelProm,
                                              labelX:data.labelX,
                                              labelY:data.labelY,
                                              strokeColor : dataset.strokeColorProm,
					      fillColor : dataset.fillColorProm,
					      highlightFill : dataset.highlightFillProm || dataset.fillColorProm,
				              highlightStroke : dataset.highlightStrokeProm || dataset.strokeColorProm,
                                              textColor : this.options.scaleFontColor,
                                              fontSize : this.options.scaleFontSize,
                                              fontStyle : this.options.scaleFontStyle,
                                              fontFamily : this.options.scaleFontFamily,
                                        });
                                
                             
			},this);
                        
                        
                        
                        
			this.buildScale(data.labels);
			this.PointImg.prototype.base = this.scale.endPoint;
                        
                        this.PointProm.prototype.endPointY = this.scale.endPoint;
                        this.PointProm.prototype.startPointY = this.scale.startPoint;
                        
                        this.PointProm.prototype.endPointX = this.scale.endPointX;
                        this.PointProm.prototype.startPointX = this.scale.startPointX;
                        this.PointProm.prototype.xScalePaddingLeft = this.scale.xScalePaddingLeft;
                        this.PointProm.prototype.width=this.scale.width;
                        
                        
                        
			this.eachPointsImg(function(pointImg, index, datasetIndex){
                                
				helpers.extend(pointImg, {
					x : this.scale.calculateX(pointImg.valueX),
                                        y : this.scale.calculateY(pointImg.valueY),
                                        src:pointImg.src
				});
				pointImg.save();
			}, this);
                        
                        
                        helpers.each(this.datasets,function(dataset, datasetIndex){
                                helpers.extend(dataset.lineProm, {
					x : this.scale.calculateX(dataset.lineProm.valueX),
                                        y : this.scale.calculateY(dataset.lineProm.valueY)
				});
				dataset.lineProm.save();
			},this);
                        
                        
                        
                        
                        

			this.render();

		},
		update : function(){
			this.scale.update();
			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor', 'strokeColor']);
			});
			this.eachPointsImg(function(pointImg){
				pointImg.save();
			});
                        this.datasets.lineProm.save();
			this.render();
		},
		eachPointsImg : function(callback){
			helpers.each(this.datasets,function(dataset, datasetIndex){
				helpers.each(dataset.PointsImg, callback, this, datasetIndex);
			},this);
		},
		getBarsAtEvent : function(e){
			var PointsImgArray = [],
				eventPosition = helpers.getRelativePosition(e),
				datasetIterator = function(dataset){
					PointsImgArray.push(dataset.PointsImg[pointImgIndex]);
				},
				pointImgIndex;

			for (var datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++) {
				for (pointImgIndex = 0; pointImgIndex < this.datasets[datasetIndex].PointsImg.length; pointImgIndex++) {
					if (this.datasets[datasetIndex].PointsImg[pointImgIndex].inRange(eventPosition.x,eventPosition.y)){
						helpers.each(this.datasets, datasetIterator);
						//return PointsImgArray;
					}
				}
                                if(this.datasets[datasetIndex].lineProm.inRange(eventPosition.x,eventPosition.y)){
                                    PointsImgArray.push(this.datasets[datasetIndex].lineProm);
                                }
			}
                        
                        
                        
			return PointsImgArray;
		},
		buildScale : function(labels){
			var self = this;

			var dataTotalX = function(){
				var values = [];
				self.eachPointsImg(function(pointImg){
					values.push(pointImg.valueX);
				});
				return values;
			};
                        var dataTotalY = function(){
				var values = [];
				self.eachPointsImg(function(pointImg){
					values.push(pointImg.valueY);
				});
				return values;
			};

			var scaleOptions = {
				templateString : this.options.scaleLabel,
				height : this.chart.height,
				width : this.chart.width,
				ctx : this.chart.ctx,
				textColor : this.options.scaleFontColor,
				fontSize : this.options.scaleFontSize,
				fontStyle : this.options.scaleFontStyle,
				fontFamily : this.options.scaleFontFamily,
				valuesCount : labels.length,
				beginAtZero : this.options.scaleBeginAtZero,
				integersOnly : this.options.scaleIntegersOnly,
				calculateYRange: function(currentHeight){
                                        
                                        var data=dataTotalY();
					var updatedRanges = helpers.calculateScaleRange(
						data,
						currentHeight,
						this.fontSize,
						this.beginAtZero,
						this.integersOnly
					);
                                        if(updatedRanges.max==helpers.max(data) || (helpers.max(data)>=((updatedRanges.steps-1)*updatedRanges.stepValue)))
                                        {            
                                            
                                            helpers.extend(this, {'steps':updatedRanges.steps+1,'stepValue':updatedRanges.stepValue,'min':updatedRanges.min,'max':updatedRanges.max+(updatedRanges.stepValue)});
                                        }else
                                        {
                                            helpers.extend(this, {'steps':updatedRanges.steps,'stepValue':updatedRanges.stepValue,'min':updatedRanges.min,'max':updatedRanges.max});
                                        }
				},
                                calculateXRange: function(currentWidth){
                                        var data=dataTotalX();
					var updatedRanges = helpers.calculateScaleRange(
						data,
						currentWidth,
						this.fontSize,
						this.beginAtZero,
						this.integersOnly
					);
                                
                                        if(updatedRanges.max==helpers.max(data) || (helpers.max(data)>=((updatedRanges.steps-1)*updatedRanges.stepValue)))
                                        {            
                                            helpers.extend(this, {'stepsX':updatedRanges.steps+1,'stepValueX':updatedRanges.stepValue,'minX':updatedRanges.min,'maxX':updatedRanges.max+(updatedRanges.stepValue)});
                                        }else
                                        {
                                            helpers.extend(this, {'stepsX':updatedRanges.steps,'stepValueX':updatedRanges.stepValue,'minX':updatedRanges.min,'maxX':updatedRanges.max});
                                        }
					
				}
                                ,
				//xLabels : labels,
				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
				lineWidth : this.options.scaleLineWidth,
				lineColor : this.options.scaleLineColor,
				showHorizontalLines : this.options.scaleShowHorizontalLines,
				showVerticalLines : this.options.scaleShowVerticalLines,
				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
				padding : (this.options.showScale) ? 0 : (this.options.pointImgShowStroke) ? this.options.pointImgStrokeWidth : 0,
				showLabels : this.options.scaleShowLabels,
				display : this.options.showScale
			};
			this.scale = new this.ScaleClass(scaleOptions);
		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			this.clear();

			var ctx = this.chart.ctx;
			this.scale.draw(easingDecimal);
                        
			helpers.each(this.datasets,function(dataset,datasetIndex){
				helpers.each(dataset.PointsImg,function(pointImg,index){
					if (pointImg.hasValue()){
						pointImg.base = this.scale.endPoint;
                                                pointImg.draw();
					}
				},this);
                                dataset.lineProm.draw();
			},this);
		}
	});

}).call(this);