use wasm_bindgen::prelude::*;
use std::f32;

#[wasm_bindgen]
pub fn area(radius: f32) -> f32 {
    return f32::consts::PI * radius.powi(2);
}

#[wasm_bindgen]
pub fn circumference(radius: f32) -> f32 {
    return 2.0 * f32::consts::PI * radius;
}

