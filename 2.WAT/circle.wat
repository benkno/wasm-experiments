(module
  (func $Area (param $radius f32) (result f32)
    f32.const 0x1.921ff2p+1 (;=3.1416;)
    local.get $radius
    f32.mul
    local.get $radius
    f32.mul
  )
  (func $Circumference (param $radius f32) (result f32)
    f32.const 0x1.921ff2p+2 (;=3.1416;)
    local.get $radius
    f32.mul
  )
  (export "Area" (func $Area))
  (export "Circumference" (func $Circumference))
)
