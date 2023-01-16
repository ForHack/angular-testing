import {LoggerService} from "./logger.service";

describe('LoggerService', () => {
  let service: LoggerService

  beforeEach(() => {
    service = new LoggerService()
  })

  it('should not have any messages at starting', () => {
    let count = service.messages.length
    expect(count).toBe(0)
  })

  it('should add the message when log is called', () => {
    service.log('Some message')

    expect(service.messages.length).toBe(1)
  })

  it('should clear all messages clear is called', () => {
    service.log('Log something')

    service.clear()

    expect(service.messages.length).toBe(0)
  })
})
