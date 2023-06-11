window.onload = () => {
  "use strict"

  const stage = new Stage()
  const view = new View({ domElementId: "app" })

  const polygonA = new PolygonA({
    stage: stage,
    view: view,
    x: view.centerX,
    y: view.centerY,
  })

  const polygonB = new PolygonB({
    stage: stage,
    view: view,
    x: view.centerX,
    y: view.centerY,
  })

  const loop = new Loop({
    stage: stage,
    view: view,
  })

  stage.add(polygonA)
  stage.add(polygonB)

  loop.run()
}
