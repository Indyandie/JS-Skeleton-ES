import assert from 'assert'
import expect from 'expect.js'
import sinon  from 'sinon'

import Point from '../../Classes/Point.js'

describe('Point',function(){

	var point = new Point(0,0)

	describe('#getPoint()',function(){
		it('should have position [0,0]',function(){
		assert.deepEqual(point.getPosition(),[0,0])
		})
	})
})