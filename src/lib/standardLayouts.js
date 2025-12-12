// Standard Layout Templates - 4 Different Configurations
// These are pre-designed templates that users can select

export const STANDARD_LAYOUTS = {
  'layout_1_vertical_left': {
    name: 'Vertical with Laterals (Left Side)',
    description: 'Main pipe vertical in center, laterals going left',
    shapes: [
      { x: 153.25847071511792, y: 63.15837592997349, id: 'shape_1765524618013', type: 'well', width: 85, height: 68, radius: 23.47167964389269, rotation: 0 },
      { id: 'shape_1765524653521', dash: [], type: 'main_pipe', points: [150.45, 311.620256793798, 152.15, 86.27062760099514], stroke: 'orange', strokeWidth: 3 },
      { id: 'shape_1765524678083', dash: [], type: 'sub_pipe', points: [634.95, 162.020254294049, 151.3, 160.120254294049], stroke: '#166534', strokeWidth: 3 },
      { id: 'shape_1765524685554', dash: [10, 5], type: 'lateral_pipe', points: [636.65, 193.470255343299, 147.05, 193.470255343299], stroke: 'blue', strokeWidth: 2 },
      { id: 'shape_1765524691305', dash: [10, 5], type: 'lateral_pipe', points: [637.5, 235.970255343299, 150.45, 234.070255343299], stroke: 'blue', strokeWidth: 2 },
      { id: 'shape_1765524695431', dash: [10, 5], type: 'lateral_pipe', points: [632.24, 276.770255343299, 152.15, 274.870255343299], stroke: 'blue', strokeWidth: 2 },
      { x: 120.6499999999999, y: 91.79999999999992, id: 'shape_1765524700596', type: 'filter_image', width: 33.8910814451048, height: 27.113172915883, radius: 40, rotation: 0 },
      { x: 124.0999999999999, y: 123.24999999999992, id: 'shape_1765524713741', type: 'valve_image', width: 39.63419075110817, height: 31.70775110489101, radius: 40, rotation: 0 },
      { x: 90.24810828116679, y: 21.08316184570555, id: 'shape_1765524725234', type: 'border', width: 586.7744679908081, height: 320.8574931421694, radius: 40, rotation: 0 },
      { x: 123.25, y: 288.15, id: 'shape_1765524754193', type: 'flush_image', width: 55.57992187202992, height: 44.46339597910010, radius: 40, rotation: 0 }
    ]
  },
  
  'layout_2_horizontal_bottom': {
    name: 'Horizontal with Sub-pipes (Bottom)',
    description: 'Main pipe horizontal, sub-pipes going downward',
    shapes: [
      // Main horizontal pipe
      { id: 'main_pipe_1', type: 'main_pipe', points: [80, 150, 620, 150], stroke: 'orange', strokeWidth: 3, dash: [] },
      
      // Vertical sub-pipes (going down from main)
      { id: 'sub_pipe_1', type: 'sub_pipe', points: [150, 150, 150, 300], stroke: '#166534', strokeWidth: 3, dash: [] },
      { id: 'sub_pipe_2', type: 'sub_pipe', points: [250, 150, 250, 300], stroke: '#166534', strokeWidth: 3, dash: [] },
      { id: 'sub_pipe_3', type: 'sub_pipe', points: [350, 150, 350, 300], stroke: '#166534', strokeWidth: 3, dash: [] },
      { id: 'sub_pipe_4', type: 'sub_pipe', points: [450, 150, 450, 300], stroke: '#166534', strokeWidth: 3, dash: [] },
      { id: 'sub_pipe_5', type: 'sub_pipe', points: [550, 150, 550, 300], stroke: '#166534', strokeWidth: 3, dash: [] },
      
      // Well at left
      { id: 'well_1', type: 'well', x: 80, y: 150, radius: 18 },
      
      // Filter (top left)
      { id: 'filter_1', type: 'filter_image', x: 40, y: 100, width: 60, height: 48 },
      
      // Valve (top right)
      { id: 'valve_1', type: 'valve_image', x: 590, y: 100, width: 60, height: 48 },
      
      // Border
      { id: 'border_1', type: 'border', x: 50, y: 80, width: 620, height: 250 }
    ]
  },
  
  'layout_3_u_shaped': {
    name: 'U-Shaped Layout',
    description: 'Main pipe with laterals on both sides',
    shapes: [
      // Main vertical pipe (center)
      { id: 'main_pipe_1', type: 'main_pipe', points: [350, 60, 350, 320], stroke: 'orange', strokeWidth: 3, dash: [] },
      
      // LEFT side lateral pipes
      { id: 'lateral_1', type: 'lateral_pipe', points: [100, 110, 350, 110], stroke: 'blue', strokeWidth: 2, dash: [10, 5] },
      { id: 'lateral_2', type: 'lateral_pipe', points: [100, 180, 350, 180], stroke: 'blue', strokeWidth: 2, dash: [10, 5] },
      
      // RIGHT side lateral pipes
      { id: 'lateral_3', type: 'lateral_pipe', points: [350, 240, 600, 240], stroke: 'blue', strokeWidth: 2, dash: [10, 5] },
      { id: 'lateral_4', type: 'lateral_pipe', points: [350, 300, 600, 300], stroke: 'blue', strokeWidth: 2, dash: [10, 5] },
      
      // Well at top
      { id: 'well_1', type: 'well', x: 350, y: 60, radius: 18 },
      
      // Filter (top center)
      { id: 'filter_1', type: 'filter_image', x: 310, y: 85, width: 60, height: 48 },
      
      // Valve (middle center)
      { id: 'valve_1', type: 'valve_image', x: 310, y: 210, width: 60, height: 48 },
      
      // Flush at bottom
      { id: 'flush_1', type: 'flush_image', x: 310, y: 290, width: 60, height: 48 },
      
      // Border
      { id: 'border_1', type: 'border', x: 60, y: 40, width: 640, height: 300 }
    ]
  },
  
  'layout_4_grid_pattern': {
    name: 'Grid Pattern Layout',
    description: 'Main horizontal with multiple vertical lines creating grid',
    shapes: [
      // Main horizontal pipe (top)
      { id: 'main_pipe_1', type: 'main_pipe', points: [80, 120, 620, 120], stroke: 'orange', strokeWidth: 3, dash: [] },
      
      // Secondary horizontal pipe (bottom)
      { id: 'main_pipe_2', type: 'main_pipe', points: [80, 280, 620, 280], stroke: 'orange', strokeWidth: 3, dash: [] },
      
      // Vertical connecting pipes (grid pattern)
      { id: 'sub_pipe_1', type: 'sub_pipe', points: [150, 120, 150, 280], stroke: '#166534', strokeWidth: 3, dash: [] },
      { id: 'sub_pipe_2', type: 'sub_pipe', points: [250, 120, 250, 280], stroke: '#166534', strokeWidth: 3, dash: [] },
      { id: 'sub_pipe_3', type: 'sub_pipe', points: [350, 120, 350, 280], stroke: '#166534', strokeWidth: 3, dash: [] },
      { id: 'sub_pipe_4', type: 'sub_pipe', points: [450, 120, 450, 280], stroke: '#166534', strokeWidth: 3, dash: [] },
      { id: 'sub_pipe_5', type: 'sub_pipe', points: [550, 120, 550, 280], stroke: '#166534', strokeWidth: 3, dash: [] },
      
      // Well at left
      { id: 'well_1', type: 'well', x: 80, y: 120, radius: 18 },
      
      // Filter (left side)
      { id: 'filter_1', type: 'filter_image', x: 30, y: 90, width: 60, height: 48 },
      
      // Valve (right side)
      { id: 'valve_1', type: 'valve_image', x: 600, y: 90, width: 60, height: 48 },
      
      // Flush (bottom center)
      { id: 'flush_1', type: 'flush_image', x: 320, y: 290, width: 60, height: 48 },
      
      // Border
      { id: 'border_1', type: 'border', x: 50, y: 75, width: 650, height: 280 }
    ]
  }
};

// Get a layout by key
export const getLayoutByKey = (layoutKey) => {
  return STANDARD_LAYOUTS[layoutKey];
};
