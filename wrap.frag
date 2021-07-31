#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution;
    
    vec3 color=vec3(.3,.4,1.);
    
    color+=sin(coord.x*cos(u_time/60.)*60.)+sin(coord.y*cos(u_time/60.)*10.);
    color+=cos(coord.y*sin(u_time/30.)*10.)+cos(coord.x*sin(u_time/20.)*10.);
    color*=sin(u_time/10.)*.5;
    gl_FragColor=vec4(color,1.);
}